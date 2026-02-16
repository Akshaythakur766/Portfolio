import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <div className="py-24 lg:py-32 container mx-auto px-4 max-w-5xl">
            {/* Header Skeleton */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-8">
                <div>
                    <Skeleton className="h-4 w-32 mb-4" />
                    <Skeleton className="h-12 w-64 mb-4" />
                    <Skeleton className="h-6 w-96" />
                </div>
                <div className="mt-8 md:mt-0">
                    <div className="flex gap-2">
                        <Skeleton className="h-8 w-20 rounded-lg" />
                        <Skeleton className="h-8 w-24 rounded-lg" />
                        <Skeleton className="h-8 w-20 rounded-lg" />
                    </div>
                </div>
            </div>

            {/* Blog List Skeleton */}
            <div className="flex flex-col gap-8">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="py-10 border-b border-white/5 flex flex-col md:flex-row gap-6 md:gap-12 items-start">
                        {/* Meta */}
                        <div className="flex flex-row md:flex-col gap-4 md:w-32 flex-shrink-0 pt-2">
                            <Skeleton className="h-4 w-24" />
                            <Skeleton className="h-3 w-16 hidden md:block" />
                        </div>
                        {/* Content */}
                        <div className="flex-1 w-full space-y-4">
                            <Skeleton className="h-8 w-3/4" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-2/3" />
                            <div className="flex gap-2 pt-2">
                                <Skeleton className="h-5 w-16 rounded-full" />
                            </div>
                        </div>
                        {/* Arrow */}
                        <div className="hidden md:flex flex-col justify-center h-full pt-4">
                            <Skeleton className="size-12 rounded-full" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
