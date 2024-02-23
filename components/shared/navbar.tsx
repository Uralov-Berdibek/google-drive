import { auth } from '@clerk/nextjs'
import { Settings } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Avatar, AvatarFallback } from '../ui/avatar'
import { ModeToggle } from './mode-toggle'
import UserBox from './user-box'

const Navbar = () => {
	const { userId } = auth()

	return (
		<div className='h-[10vh] z-30 bg-[#F6F9FC] dark:bg-[#1F1F1F]'>
			<div className='flex items-center justify-between py-3 px-6'>
				<Link href={'/'}>
					<div className='flex items-center'>
						<Image src={'/logo.svg'} alt='Logo' width={40} height={40} />
						<span className='pl-2 text-[22px] opacity-75'>Drive</span>
					</div>
				</Link>

				<div className='flex items-center space-x-2'>
					<ModeToggle />

					<Link href={'/settings'}>
						<div
							className='p-2 hover:bg-secondary rounded-full transition'
							role='button'
						>
							<Settings className='w-5 h-5' />
						</div>
					</Link>
					{userId ? (
						<UserBox />
					) : (
						<Avatar className='cursor-pointer'>
							<AvatarFallback>SB</AvatarFallback>
						</Avatar>
					)}
				</div>
			</div>
		</div>
	)
}

export default Navbar
