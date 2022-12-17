import React from 'react';
import Book from '../assets/dummyImg/book_component'


const Discover = ({data}) => {
    let recent;

  if (data) {
   recent = data.sort((a ,b) => {
    if ( b.createdAt < a.createdAt) {
      return -1
    }
    return -1
   })
  }
    return (
      
        <section className='section_scroll_container'>
        <span>Recently Added</span>
        <div className="scroll_wrapper">
            {
                recent ? 
              recent.map(recents => (
                <Book key={recents.id} name={recents.book_name} genre={recents.gerners} />
              ))
            
             : <p>loading</p>
            }
        </div>
         </section>
    )
}

export default Discover