import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm} from '@inertiajs/react';
import FormUser from './Partials/FormUser';

export default function Edit(props) {

    const { user, roles } = props;

    const { data, setData, put } = useForm({
        name: user.name || '', 
        email: user.email || '',
        address: user.address || '',
        phone_number: user.phone_number || '',
        wallet: user.wallet || 0,
        store_name: user.store_name || '',
        password: user.password || '',
        role_id: user.roles_id
    });

    const handleChange = (e) => {
        setData(e.target.name, e.target.value)
    };

    const submitHandler = (e) => {
        try {
            e.preventDefault()
            put(route('user.update', user.id), {
                onSuccess: (e) => console.log(e),
                onError: (e) => console.log(e)
            })
        } catch(e) {
            console.log(e)
        }
    };

    // console.log(route('user.update', user.id));

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit User</h2>}
        >
            <Head title='Edit User'/>

            <div className="px-4 mt-8 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h1 className="text-base font-semibold leading-6 text-gray-900">Adding a new User</h1>
                        <p className="mt-2 text-sm text-gray-700">Adding a new user so that the user can use the application.</p>
                    </div>
                </div>
                <FormUser {... {data, submitHandler, handleChange, roles, submit: 'Update User'}}/>
            </div>
        </AuthenticatedLayout>
    );
}