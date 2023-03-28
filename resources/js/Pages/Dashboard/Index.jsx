import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Index(props) {

    console.log(props);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <p className="mt-3 px-6 py-1 text-gray-900">Hello {props.auth.user.name}!</p>
                        <p className="p-6 text-gray-900">Welcome to Dashboard</p>
                    </div>

                    <div className="bg-black">
                        <p></p>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
