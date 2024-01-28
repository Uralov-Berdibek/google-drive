'use client'

import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useFolder } from '@/hooks/use-folder'
import { db } from '@/lib/firebase'
import { formSchema } from '@/lib/validation'
import { useUser } from '@clerk/nextjs'
import { zodResolver } from '@hookform/resolvers/zod'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import * as z from 'zod'

export default function FolderModal() {
	const { isOpen, onClose } = useFolder()
	const { user } = useUser()

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
		},
	})

	function onSubmit(values: z.infer<typeof formSchema>) {
		const promise = addDoc(collection(db, 'folders'), {
			name: values.name,
			timestamp: serverTimestamp(),
			uid: user?.id,
			isArchive: false,
		}).then(() => {
			form.reset()
			onClose()
		})

		toast.promise(promise, {
			loading: 'Loading...',
			success: 'Folder created',
			error: 'Error creating folder',
		})
	}

	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>New Folder</DialogTitle>
				</DialogHeader>

				<div className='flex flex-col space-y-2'>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'>
							<FormField
								control={form.control}
								name='name'
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input
												placeholder='Folder Name'
												{...field}
												className='rounded-none outline-none'
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<div className='flex justify-end items-center space-x-2'>
								<Button variant={'link'} size={'sm'} onClick={onClose}>
									Cancel
								</Button>
								<Button variant={'outline'} size={'sm'} type='submit'>
									Create
								</Button>
							</div>
						</form>
					</Form>
				</div>
			</DialogContent>
		</Dialog>
	)
}
