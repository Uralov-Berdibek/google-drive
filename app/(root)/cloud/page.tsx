import Header from '@/components/shared/header'
import { db } from '@/lib/firebase'
import { auth } from '@clerk/nextjs'
import { collection, getDocs, query, where } from 'firebase/firestore'

const getData = async (uid: string) => {
	let data: any[] = []
	const q = query(
		collection(db, 'files'),
		where('uid', '==', uid),
		where('isArchive', '==', false)
	)
	const querySnapshot = await getDocs(q)
	querySnapshot.forEach(doc => {
		data.push({ ...doc.data(), id: doc.id })
	})

	return data
}

const CloudPage = async () => {
	const { userId } = auth()
	const files = await getData(userId!)
	const totalSize = files.reduce((acc, file) => acc + file.size, 0)

	return (
		<>
			<Header label='Storage' />
		</>
	)
}

export default CloudPage
