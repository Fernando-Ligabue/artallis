import { Skeleton } from './ui/skeleton';
const SkelletonLoader = () => {
    return (
        <div className="w-full max-w-1/3 flex items-center flex-col">
            <Skeleton className="h-56 w-full rounded-md bg-zinc-900/60 animate-pulse border-artLightBlue-50" />
        </div>
    )
}

export default SkelletonLoader