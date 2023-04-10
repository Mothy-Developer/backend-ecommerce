import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm} from '@inertiajs/react';
import FormProduct from './Partials/FormProduct';

export default function Edit(props) {

    const { product, user, category } = props;

    const { data, setData, put } = useForm({
        name: product.name || '',
        users_id: product.users_id,
        price: product.price || 0,
        description: product.description || '',
        stock: product.stock || '',
        status_product: product.status_product || '',
        categories_id: product.categories_id,
    });

    const handleChange = (e) => {
        setData(e.target.name, e.target.value)
    };

    const submitHandler = (e) => {
        try {
            e.preventDefault()
            put(route('product.update', product.id), {
                onSuccess: (e) => console.log(e),
                onError: (e) => console.log(e)
            });
        } catch(e) {
            console.log(e)
        }
    }

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit Product</h2>}
        >
            <Head title='Edit Product'/>

            <div className="px-4 mt-8 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h1 className="text-base font-semibold leading-6 text-gray-900">Adding a new Product</h1>
                        <p className="mt-2 text-sm text-gray-700">Adding a new product so that the user can buy the product.</p>
                    </div>
                </div>
                <FormProduct {... {data, submitHandler, handleChange, user, category, submit: 'Update User'}}/>
            </div>
        </AuthenticatedLayout>
    )
}