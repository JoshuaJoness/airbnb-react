import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Signup from './Signup'
import Profile from './Profile'
import Place from './Place'
import Login from './Login'
import Host from './Host'
import Favorites from './Favorites'
import Create from './Create'
import Confirm from './Confirm'
import Bookings from './Bookings'
import Thumbnail from './Thumbnail'



class Routes extends React.Component {
	render () {
		return (<BrowserRouter>
							<Switch>
								<Route path ='/thumbnail' component={Thumbnail} />
								<Route path ='/favorites' component={Favorites} />
								<Route path ='/bookings' component={Bookings} />
								<Route path ='/profile' component={Profile} />
								<Route path ='/confirm' component={Confirm} />
								<Route path ='/create' component={Create} />
								<Route path ='/login' component={Login} />
								<Route path = '/place' component={Place} />
								<Route path = '/host' component={Host} />
								<Route path ='/' component={Signup} />
							</Switch>
						</BrowserRouter>
					)
	}
}

export default Routes
