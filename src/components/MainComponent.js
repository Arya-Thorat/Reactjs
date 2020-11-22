//container component
import React , {Component} from 'react';
import {DISHES} from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import MenuComponent from './MenuComponent';
import DishDetail from './DishDetailComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import HomeComponent from './HomeComponent';
import Contact from './ContactComponent';
import {Switch,Route,Redirect} from 'react-router-dom'; 

class Main extends Component {
  constructor(props)
  {
    super(props)
    this.state={
      dishes: DISHES,
      // selectedDish:null //this is selectedDishId
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    }
  }
  // onDishSelect(dishId)
  //   {
  //       this.setState({
  //           selectedDish : dishId
  //       })
  //   }
  render(){
    const HomePage=()=>{
      return (
        <HomeComponent dish={this.state.dishes.filter((dish) => dish.featured)[0]}
        promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
        leader={this.state.leaders.filter((leader) => leader.featured)[0]}/>
      )
    }

    return (
      <div>
        <HeaderComponent/>
        <Switch>
        <Route path="/home" component={HomePage}/>
        {/* this above method of calling a component wont pass props to that comp */}
        <Route exact path="/menu" component={() => <MenuComponent dishes={this.state.dishes}/>}/>
        <Redirect to="/home"/>
        <Route exact path='/contactus' component={Contact} />
        </Switch>
        <FooterComponent/>
        
        {/* <MenuComponent dishes={this.state.dishes} onClick = {(dishId) => this.onDishSelect(dishId)}/>
        //you can pass functions of the parent component aswell to the child to call whenever it deems fits
        <DishDetail dish={this.state.dishes.filter(dish =>dish.id === this.state.selectedDish)[0]}/>
        //the above passes the object of the dish that has been selected
        //by selecting that object whose id matches the selectedDish  */}
      
      </div>
    );
  }
}

export default Main;
