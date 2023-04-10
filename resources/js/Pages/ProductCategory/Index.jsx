import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { debounce, pickBy } from "lodash";
import { useCallback, useEffect, useReducer, useState } from "react";

export default function Index(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Product Category
                </h2>
            }
        >
            <Head title="Product Category" />

            <div class="px-4 mt-8 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div class="sm:flex sm:items-center">
                    <div class="sm:flex-auto">
                        <h1 class="text-base font-semibold leading-6 text-gray-900">
                            Product Categories List
                        </h1>
                        <p class="mt-2 text-sm text-gray-700">
                            A list of all the product categories.
                        </p>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
