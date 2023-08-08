import './styles/Modals1.css'

const Modals = ({ succedCreate,  succedDelete, succedUpdate ,setSuccedCreate, setSuccedDelete, setSuccedpdate}) => {

    const handleCloseModal = () =>{
        setSuccedCreate(true)
        setSuccedDelete(true)
        setSuccedpdate(true)
      }



  return (
    <>
    <div onClick={handleCloseModal} className={`succedcreate-container ${ succedCreate && 'closecreate'}`} >
        <article onClick={e => e.stopPropagation()} className='succedcreate'>
          <h2 className='succedcreate-title'>Created!</h2>
          <div onClick={handleCloseModal} className='close'>x</div>
          <hr />
            <p className='succedcreate-text'>The user has been created successfully</p>
          <hr />
        </article>
      </div>
      <div onClick={handleCloseModal} className={`succedcreate-container ${ succedDelete && 'closecreate'}`} >
        <article onClick={e => e.stopPropagation()} className='succedcreate'>
          <h2 className='succedcreate-title'>deleted!</h2>
          <div onClick={handleCloseModal} className='close'>x</div>
          <hr />
            <p className='succedcreate-text'>The user has been deleted successfully</p>
          <hr />
        </article>
      </div>
      
      <div onClick={handleCloseModal} className={`succedcreate-container ${ succedUpdate && 'closecreate'}`} >
        <article onClick={e => e.stopPropagation()} className='succedcreate'>
          <h2 className='succedcreate-title'>updated!</h2>
          <div onClick={handleCloseModal} className='close'>x</div>
          <hr />
            <p className='succedcreate-text'>The user has been successfully updated </p>
          <hr />
        </article>
      </div>
    </>
  )
}

export default Modals