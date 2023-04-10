import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Index(props) {
    console.log(props);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Welcome ToDashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="flex justify-between">
                            <div className="grid grid-cols-4 gap-4 w-full">
                                <div className="bg-yellow-500 text-white rounded-md p-6 flex items-center justify-center flex-col">
                                    <p className="font-bold text-4xl">
                                        {props.total_user}
                                    </p>
                                    <p className="font-semibold text-sm">
                                        Total User
                                    </p>
                                </div>
                                <div className="bg-blue-500 text-white rounded-md p-6 flex items-center justify-center flex-col">
                                    <p className="font-bold text-4xl">
                                        {props.total_product}
                                    </p>
                                    <p className="font-semibold text-sm">
                                        Total Product
                                    </p>
                                </div>
                                <div className="bg-green-500 text-white rounded-md p-6 flex items-center justify-center flex-col">
                                    <p className="font-bold text-4xl">
                                        {props.total_transaction}
                                    </p>
                                    <p className="font-semibold text-sm">
                                        Total Transaction
                                    </p>
                                </div>
                                <div className="bg-red-500 text-white rounded-md p-6 flex items-center justify-center flex-col">
                                    <p className="font-bold text-4xl ">
                                        {props.total_category}
                                    </p>
                                    <p className="font-semibold text-sm">
                                        Total Product Category
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-black">
                        <p></p>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
