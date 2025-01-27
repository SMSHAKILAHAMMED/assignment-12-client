import { useMemo, useState } from "react";
import {
    useReactTable,
    getCoreRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    flexRender,
} from "@tanstack/react-table";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useAuth from "../../../Components/hooks/useAuth";
import useAxiosSecure from "../../../Components/hooks/useAxiosSecure";



const MyAddedPets = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    // Fetching data with React Query
    const { data: pets = [], refetch } = useQuery({
        queryKey: ["pets"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/myAddPets/?email=${user.email}`);
            return res.data;
        },
    });
    console.log(pets);

    const columns = useMemo(
        () => [
            {
                accessorKey: "serialNumber",
                header: "No",
                cell: (info) => info.row.index + 1,
            },
            {
                accessorKey: "image",
                header: "Image",
                cell: ({ getValue }) => (
                    <img src={getValue()} alt="Pet" className="w-12 h-12 object-cover" />
                ),
            },
            {
                accessorKey: "name",
                header: "Name",
            },
            {
                accessorKey: "category",
                header: "Category",
            },
            {
                accessorKey: "age",
                header: "Age",
                
            },
            {
                accessorKey: "action",
                header: "Action",
                cell: ({ row }) => (
                    <div className="space-x-2">
                        <button
                            onClick={() => handleUpdate(row.original._id)}
                            className="bg-blue-500 text-white px-2 py-1 rounded"
                        >
                            Update
                        </button>
                        <button
                            onClick={() => handleDelete(row.original._id)}
                            className="bg-red-500 text-white px-2 py-1 rounded"
                        >
                            Delete
                        </button>
                        <button
                            onClick={() => handleAdopted(row.original._id)}
                            className="bg-green-500 text-white px-2 py-1 rounded"
                        >
                            Adopted
                        </button>
                    </div>
                ),
            },
        ],
        []
    );

    const handleUpdate = (_id) => {
        console.log(`Update pet with ID: ${_id}`);
    };

    const handleDelete = async (_id) => {
        console.log(`Delete pet with ID: ${_id}`);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/myAddedDelete/${_id}`).then((res) => {
                    console.log(res.data);
                    if (res.data.deletedCount > 0) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Pet deleted successfull.",
                            icon: "success",
                        });
                        refetch();
                    }
                });
            }
        });
    };

    const handleAdopted = async (_id, id) => {
        console.log(`Adopted pet with ID: ${_id}`);
        console.log(`pet with ID: ${id}`);

        await axiosSecure.patch(`/myAddedAdopt/${_id}/${id}`).then((res) => {
            console.log(res.data);
            refetch();
        });
    };

    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const [sorting, setSorting] = useState([]);

    const table = useReactTable({
        data: pets,
        columns,
        pageCount: Math.ceil(pets.length / pageSize),
        state: {
            pagination: {
                pageIndex,
                pageSize,
            },
            sorting,
        },
        onPaginationChange: (updater) => {
            const newState =
                typeof updater === "function"
                    ? updater({ pageIndex, pageSize })
                    : updater;
            setPageIndex(newState.pageIndex);
            setPageSize(newState.pageSize);
        },
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        manualPagination: true,
    });

    const paginatedData = useMemo(() => {
        const start = pageIndex * pageSize;
        const end = start + pageSize;
        return pets.slice(start, end);
    }, [pets, pageIndex, pageSize]);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 text-center">---My Added Pets---</h1>
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr
                            key={headerGroup.id}
                            className="bg-gray-100 border-b border-gray-300"
                        >
                            {headerGroup.headers.map((header) => (
                                <th
                                    key={header.id}
                                    className="p-4 text-left text-sm font-medium text-gray-700 cursor-pointer"
                                    onClick={header.column.getToggleSortingHandler()}
                                >
                                    {header.isPlaceholder ? null : (
                                        <div className="flex items-center">
                                            {flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                            {{
                                                asc: " 🔼",
                                                desc: " 🔽",
                                            }[header.column.getIsSorted()] ?? null}
                                        </div>
                                    )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {paginatedData.map((row, i) => (
                        <tr key={row._id} className="border-b border-gray-300">
                            <td className="p-4 text-sm text-gray-700">
                                {i + 1 + pageIndex * pageSize}
                            </td>
                            <td className="p-4 text-sm text-gray-700">
                                <img
                                    src={row.image}
                                    alt="Pet"
                                    className="w-12 h-12 object-cover"
                                />
                            </td>
                            <td className="p-4 text-sm text-gray-700">
                                {row.name}</td>
                            <td className="p-4 text-sm text-gray-700">
                                {row.category}</td>
                            <td className="p-4 text-sm text-gray-700">
                                {row.age} 
                            </td>
                            <td className="p-4 text-sm text-gray-700">
                                <div className="space-x-2">
                                     <Link to={`/updateCard/${row._id}`}>
                                       <button className="px-2 py-1 bg-green-500">Update</button></Link>
                                    <button
                                        onClick={() => handleDelete(row._id)}
                                        className="bg-red-500 text-white px-2 py-1 rounded"
                                    >
                                        Delete
                                    </button>
                                    {row.adopted ? (
                                        <button
                                            disabled={true}
                                            className="bg-emerald-950 text-white px-2 py-1 rounded"
                                        >
                                            Already Adopt
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => handleAdopted(row._id, row.id)}
                                            className="bg-green-500 text-white px-2 py-1 rounded"
                                        >
                                            Adopted
                                        </button>
                                    )}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {table.getPageCount() > 1 && (
                <div className="flex justify-between items-center mt-4">
                    <button
                        className="px-4 py-2 bg-gray-200 text-gray-700 rounded"
                        onClick={() => table.setPageIndex(pageIndex - 1)}
                        disabled={!table.getCanPreviousPage()}
                    >
                        Previous
                    </button>
                    <span className="text-sm text-gray-700">
                        Page {table.getState().pagination.pageIndex + 1} of{" "}
                        {table.getPageCount()}
                    </span>
                    <button
                        className="px-4 py-2 bg-gray-200 text-gray-700 rounded"
                        onClick={() => table.setPageIndex(pageIndex + 1)}
                        disabled={!table.getCanNextPage()}
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
};

export default MyAddedPets;
