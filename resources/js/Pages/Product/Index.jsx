import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';
import { debounce, pickBy } from 'lodash';
import { useState, useCallback, useEffect } from 'react';

const ActionButton = ( props ) => {
    return (
        <button {...props} className={`px-2 py-1 rounded-md text-white ` + props.className}>
            {props.children}
        </button>
    )
}

export default function Index(props) {

    const { data: product, meta, filtered, attributes } = props.product;
    const { category, user } = props;
    const [ params, setParams ] = useState(filtered);

    const deleteProduct = async (id) => {
        try {
            const deletes = router.delete(`/product/${id}`);
            console.log(deletes)
        } catch(e) {
            console.log(e);
        }
    }

    const onChange = (e) => setParams({...params, [e.target.name]: e.target.value});
    const sort = (item) => {
        setParams({
            ...params,
            field: item,
            direction: params.direction == 'asc' ? 'desc' : 'asc'
        });
    };

    const reload = useCallback(
        debounce((query) => {
            router.get(
                route('product.index'),
                {...pickBy(query), page: query.q ? 1 : query.page },
                {
                    preserveState: true,
                    preserveScroll: true,
                }
            );
        }, 150)
        , 
        []
    );

    useEffect(() => reload(params), [params]);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Product</h2>}
        >
            <Head title="Product" />

            <div class="px-4 mt-8 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div class="sm:flex sm:items-center">
                    <div class="sm:flex-auto">
                    <h1 class="text-base font-semibold leading-6 text-gray-900">Products List</h1>
                    <p class="mt-2 text-sm text-gray-700">A list of all the products.</p>
                    </div>
                    <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <button type="button" class="block rounded-md bg-indigo-600 py-2 px-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add product</button>
                    </div>
                </div>
                <div class="mt-8 flow-root">
                    <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-300">
                            <thead class="bg-gray-50">
                            <tr>
                                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6"/>
                                <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">No</th>
                                <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Product Name</th>
                                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Product Category</th>
                                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Product Owner</th>
                                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Price</th>
                                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Description</th>
                                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Stock</th>
                                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Product Status</th>
                            </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200 bg-white"> 
                                {product.map((product, index) => (
                                    <tr key={product.id}>
                                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                            <div className="flex gap-2">
                                                    <Link href={`/product/${product.id}/edit`} className="px-2 py-1 rounded-md text-white bg-blue-500">Edit</Link> 
                                                    <ActionButton type="button" className="bg-red-500" onClick={() => deleteProduct(product.id) }>Delete</ActionButton> 
                                            </div>
                                        </td>
                                        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                            {meta.from + index}
                                        </td>
                                        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                            {product.name}
                                        </td>
                                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            {category.find(it => product.categories_id == it.id).name}
                                        </td>
                                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            {user.find(it => product.users_id == it.id).name}
                                        </td>
                                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            Rp{product.price}
                                        </td>
                                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            {product.description}
                                        </td>
                                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            {product.stock}
                                        </td>
                                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            {product.status_product}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
