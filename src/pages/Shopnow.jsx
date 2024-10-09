import React from 'react'

function Shopnow() {
  return (
    <>
      <div style={{ width: '100%', overflowX: 'hidden' }}>
        <div className='shop-main d-flex justify-content-center align-items-center'>
          <div className='text-center text-light'>
            <h6 style={{ letterSpacing: '5px', fontWeight: '800' }}>BUY ONLINE</h6>
            <h1>Shop Now</h1>
          </div>
        </div>

        <div style={{ width: '100%' }}>
          <div style={{ width: '100%', height: '3px', backgroundColor: 'brown' }}></div>
          <div style={{ width: '100%', height: '6px', backgroundColor: 'white' }}></div>
          <div style={{ width: '100%', height: '10px', backgroundColor: 'rgb(5, 5, 82)' }}></div>
        </div>


        <div>
          <h5 className='text-center mt-5' style={{ letterSpacing: '6px', color: 'brown', fontWeight: '700' }}>U.S. POLO ASSN.</h5>
          <h1 className='text-center' style={{ color: 'rgb(5, 5, 82)', fontWeight: '700', fontFamily: ' Cambria, Cochin, Georgia, Times, serif' }}>SHOP ONLINE</h1>
        </div>

        <div>
          <ul className='shop'>
            <li>INDIA - <a href="">www.uspoloassn.in</a></li>
            <li>TURKEY - <a href="">www.tr.uspoloassn.com</a></li>
            <li>USA - <a href="">www.uspoloassn.com</a></li>
            <li>UNITED KINGDOM - <a href="">www.uspoloassn.co.uk</a></li>
            <li>DENMARK - <a href="">www.uspoloassn.dk</a></li>
            <li>SERBIA - <a href="">www.uspoloassn.rs</a></li>
            <li>CROATIA - <a href="">www.uspoloassn.hr</a></li>
            <li>BOSNIA - <a href="">www.uspoloassn.ba</a></li>
            <li>ITALY - <a href="">www.uspoloassn.it</a></li>
            <li>MONTENEGRO - <a href="">www.uspoloassn.me</a></li>
            <li>EGYPT - <a href="">www.uspoloassn.eg</a></li>
            <li>SWEDEN - <a href="">www.uspoloassn.se</a></li>
            <li>AUSTRALIA - <a href="">www.uspoloassn.com.au</a></li>
            <li>MEXICO - <a href="">www.uspoloassn.com.mx</a></li>
            <li>JAPAN - <a href=""> www.uspoloassn.jp</a></li>
            <li>ROMANIA - <a href=""> www.uspoloassn.com.ro</a></li>
            <li>SLOVENIA - <a href=""> www.uspoloassn.si</a></li>
            <li>PANAMA - <a href=""> www.uspoloassn.pa</a></li>
            <li>SOUTH AFRICA - <a href=""> www.uspoloassn.co.za</a></li>
          </ul>
        </div>

      </div>
    </>
  )
}

export default Shopnow