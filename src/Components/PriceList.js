import React from 'react'

function PriceList() {
  const data = [
         {
            name :"Free",
            price:0,
            user:"Single User",
            storage:"5GB Storage"
          },
          {
            name :"Plus",
            price:9,
            user:"5 User",
            storage:"50GB Storage"
          },
          {
            name :"Pro",
            price:49,
            user:"Unlimited User",
            storage:"150GB Storage"
          },  
  ]
  return (
    <section class="pricing py-5">
  <div class="container">
    <div class="row">
      {
          data.map((list)=>{
            return <div class="col-lg-4">
            <div class="card mb-5 mb-lg-0">
              <div class="card-body">
                <h5 class="card-title text-muted text-uppercase text-center">{list.name}</h5>
                <h6 class="card-price text-center">${list.price}<span class="period">/month</span></h6>
                <hr/>
                <ul class="fa-ul">
                  <li><span class="fa-li"><i class="fa fa-check"></i></span>{list.name==="Free" ? list.user : <b>{list.user}</b>}</li>
                  <li><span class="fa-li"><i class="fa fa-check"></i></span>{list.storage}</li>
                  <li><span class="fa-li"><i class="fa fa-check"></i></span>Unlimited Public Projects</li>
                  <li><span class="fa-li"><i class="fa fa-check"></i></span>Community Access</li>
                  <li class={list.name==="Free"? "text-muted":""}><span class="fa-li"><i class="fa fa-times"></i></span>Unlimited
                    Private Projects</li>
                  <li class={list.name==="Free"? "text-muted":""}><span class="fa-li"><i class="fa fa-times"></i></span>Dedicated
                    Phone Support</li>
                  <li class={list.name==="Free" ? "text-muted" : ""}><span class="fa-li"><i class="fa fa-times"></i></span>{list.name==="Pro" && <b>Unlimited</b>} Free Subdomain
                  </li>
                  <li class={list.name==="Pro"? "" : "text-muted"}><span class="fa-li"><i class="fa fa-times"></i></span>Monthly Status
                    Reports</li>
                </ul>
                <div class="d-grid">
                  <a href="#" class="btn btn-primary text-uppercase">Button</a>
                </div>
              </div>
            </div>
          </div>
          })
      }
      
      
    </div>
  </div>
</section>
  )
}

export default PriceList