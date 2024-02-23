'use client'

import { useClerk, useUser } from '@clerk/nextjs'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Avatar, AvatarImage } from '../ui/avatar'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '../ui/dropdown-menu'

const UserBox = () => {
	const { user } = useUser()
	const { signOut } = useClerk()
	const router = useRouter()

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<div role='button'>
					<Avatar>
						<AvatarImage src={user?.imageUrl} />
					</Avatar>
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				className='w-80'
				align='start'
				alignOffset={11}
				forceMount
			>
				<div className='flex flex-col space-y-4 p-2'>
					<p className='text-xs font-medium leading-none text-muted-foreground'>
						{user?.emailAddresses[0].emailAddress}
					</p>

					<div className='flex items-center gap-x-2'>
						<div className='rounded-md bg-secondary p-1'>
							<Avatar className='h-8 w-8'>
								<AvatarImage src={user?.imageUrl} />
							</Avatar>
						</div>

						<div className='space-y-1'>
							<p className='text-sm line-clamp-1'>{user?.fullName}</p>
						</div>
					</div>

					<DropdownMenuSeparator />
					<div>
						<Link href={'/settings'}>
							<DropdownMenuItem
								asChild
								className='w-full cursor-pointer text-muted-foreground'
							>
								<div role='button'>Account</div>
							</DropdownMenuItem>
						</Link>
						<DropdownMenuItem
							asChild
							className='w-full cursor-pointer text-muted-foreground'
							onClick={() => signOut(() => router.push('/sign-in'))}
						>
							<div role='button'>Log out</div>
						</DropdownMenuItem>
					</div>
				</div>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default UserBox
