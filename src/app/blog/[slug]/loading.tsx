import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <div className="bg-gray-950 min-h-screen pb-32 pt-32 container max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Sidebar TOC Skeleton */}
            <aside className="hidden lg:block lg:col-span-3">
                <Skeleton className="h-4 w-32 mb-6" />
                <div className="space-y-3 border-l-2 border-white/5 pl-4">
                    <Skeleton className="h-3 w-24" />
                    <Skeleton className="h-3 w-32" />
                    <Skeleton className="h-3 w-20" />
                    <Skeleton className="h-3 w-28" />
                </div>
            </aside>

            <main className="lg:col-span-7 col-span-12">
                {/* Header Skeleton */}
                <div className="mb-16 border-b border-white/10 pb-12">
                    <div className="flex gap-4 mb-6">
                        <Skeleton className="h-6 w-20 rounded" />
                        <Skeleton className="h-6 w-32" />
                        <Skeleton className="h-6 w-24" />
                    </div>
                    <Skeleton className="h-16 w-full mb-6" />
                    <Skeleton className="h-16 w-2/3 mb-8" />
                    <div className="border-l-4 border-white/10 pl-6">
                        <Skeleton className="h-24 w-full" />
                    </div>
                </div>

                {/* Content Skeleton */}
                <div className="space-y-8">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />

                    <Skeleton className="h-8 w-1/2 mt-12 mb-4" /> {/* H2 */}
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />

                    <Skeleton className="h-64 w-full rounded-xl my-8" /> {/* Code/Image Block */}

                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                </div>
            </main>
        </div>
    );
}
