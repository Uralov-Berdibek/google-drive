import {
	Table,
	TableBody,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
import { IFolderAndFile } from '@/types'
import ListItem from './list-item'

interface ListsProps {
	folders: IFolderAndFile[]
	files: IFolderAndFile[]
}

const Lists = ({ folders, files }: ListsProps) => {
	return (
		<Table className='mt-4'>
			<TableHeader>
				<TableRow>
					<TableHead>Name</TableHead>
					<TableHead>owner</TableHead>
					<TableHead>Created At</TableHead>
					<TableHead>File Size</TableHead>
					<TableHead className='text-right'>Actions</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{[...folders, ...files].map(items => (
					<ListItem key={items.id} item={items} />
				))}
			</TableBody>
		</Table>
	)
}

export default Lists
