import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Index(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Product Gallery</h2>}
        >
            <Head title="Product Gallery" />

            <div class="px-4 mt-8 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div class="sm:flex sm:items-center">
                    <div class="sm:flex-auto">
                    <h1 class="text-base font-semibold leading-6 text-gray-900">Product Galleries List</h1>
                    <p class="mt-2 text-sm text-gray-700">A list of all the product photos.</p>
                    </div>
                    <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <button type="button" class="block rounded-md bg-indigo-600 py-2 px-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add product photo</button>
                    </div>
                </div>
                <div class="mt-8 flow-root">
                    <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-300">
                            <thead class="bg-gray-50">
                            <tr>
                                <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">No</th>
                                <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Product ID</th>
                                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Product Photo</th>
                                <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                <span class="sr-only">Edit</span>
                                </th>
                            </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200 bg-white">
                                <tr>
                                <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">1</td>
                                    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">2</td>
                                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                        <div class="h-20 w-20 flex-shrink-0">
                                            <img class="h-20 w-20 rounded-md" src="http://www.cakrawalanews.co.id/images/view/-IMG-20201230-WA0012.jpg" alt="Product Photo"/>
                                        </div>
                                    </td>
                                    <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                    <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit<span class="sr-only">, Lindsay Walton</span></a>
                                    </td>
                                </tr>
                            </tbody>
                            <tbody class="divide-y divide-gray-200 bg-white">
                                <tr>
                                <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">2</td>
                                    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">2</td>
                                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                        <div class="h-20 w-20 flex-shrink-0">
                                            <img class="h-20 w-20 rounded-md" src="http://www.cakrawalanews.co.id/images/view/-IMG-20201230-WA0012.jpg" alt="Product Photo"/>
                                        </div>
                                    </td>
                                    <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                    <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit<span class="sr-only">, Lindsay Walton</span></a>
                                    </td>
                                </tr>
                            </tbody>
                            <tbody class="divide-y divide-gray-200 bg-white">
                                <tr>
                                <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">3</td>
                                    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">2</td>
                                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                        <div class="h-20 w-20 flex-shrink-0">
                                            <img class="h-20 w-20 rounded-md" src="http://www.cakrawalanews.co.id/images/view/-IMG-20201230-WA0012.jpg" alt="Product Photo"/>
                                        </div>
                                    </td>
                                    <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                    <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit<span class="sr-only">, Lindsay Walton</span></a>
                                    </td>
                                </tr>
                            </tbody>
                            <tbody class="divide-y divide-gray-200 bg-white">
                                <tr>
                                <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">4</td>
                                    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">2</td>
                                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                        <div class="h-20 w-20 flex-shrink-0">
                                            <img class="h-20 w-20 rounded-md" src="http://www.cakrawalanews.co.id/images/view/-IMG-20201230-WA0012.jpg" alt="Product Photo"/>
                                        </div>
                                    </td>
                                    <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                    <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit<span class="sr-only">, Lindsay Walton</span></a>
                                    </td>
                                </tr>
                            </tbody>
                            <tbody class="divide-y divide-gray-200 bg-white">
                                <tr>
                                <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">5</td>
                                    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">2</td>
                                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                        <div class="h-20 w-20 flex-shrink-0">
                                            <img class="h-20 w-20 rounded-md" src="http://www.cakrawalanews.co.id/images/view/-IMG-20201230-WA0012.jpg" alt="Product Photo"/>
                                        </div>
                                    </td>
                                    <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                    <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit<span class="sr-only">, Lindsay Walton</span></a>
                                    </td>
                                </tr>
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
