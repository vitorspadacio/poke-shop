import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './index.scss'

import ShopPage from './shop/ShopPage'

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={ShopPage} />
    </Switch>
  </BrowserRouter>
)
