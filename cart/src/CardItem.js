import React from 'react';

class CardItem extends React.Component{

    render(){

        return(

            <div className="card-item">
                <div className='left-block'>
                <img style={styles.image} />


                </div>

                <div className='right-block'>

                    <div style={{fontSize: 25}}>Phone</div>
                    <div style={{color: '#777'}}>Rs 999</div>
                    <div style={{fontSize: 25, color:'#777'}}>Qty: 1</div>
                    <div className='card-item-actions'>
                        {/* buttons */}

                    </div> 

                </div>

                

            </div>

        );

    }

}

const styles={
    image:{
        height: 110,
        width:110,
        borderRadius: 4
    }
}

export default CardItem;