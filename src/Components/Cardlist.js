import React from 'react';
import Card from './Card';


const cardsList = ({robots}) =>{
    
    
    return(
        <div>
            {
              robots.map((element,i) =>{
                return(
        
                    <Card 
                    key = {i}
                    id={robots[i].id} 
                    name={robots[i].name} 
                    email={robots[i].email}
                    />

                 );
             })
             
            };
            
        </div>

    );

}

export default cardsList;







    // <Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
    //   <Card id={robots[1].id} name={robots[1].name} email={robots[1].email} />
    //   <Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/>

    // cardsArray = robots.map(()=>{
    //     {<Card id={robots[indox].id} name={robots[indox].name} email={robots[indox].email}/>},indox)
    // }