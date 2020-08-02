//import { UserEdit } from './views/UserEdit'
import { User } from './models/User'
import { UserList } from './views/UserList'

//const user = User.buildUser({ name: 'Andreas', age: 23 })
const users = User.buildUserCollection()
users.fetch()
users.on('change', () => {
	const root = document.getElementById('root')
	if (root) {
		new UserList(root, users).render()
		//new UserEdit(root, user).render()
	} else {
		throw new Error('Root element not found')
	}
})
