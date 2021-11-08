import React from 'react';
import {Button} from 'react-bootstrap';

function Card(props) {
    return(
        <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">{props.type.title}</h5>
            <h6 class="card-price text-center">{props.type.price}<span class="period">/month</span></h6>
            <hr/>
            <ul class="fa-ul">
              <li class={props.type.userEnabler?"":"text-muted"}><span class="fa-li"><i class={props.type.userEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.type.title === "FREE"?<>{props.type.user}</>:<b>{props.type.user}</b>}</li>
              <li class={props.type.storageEnabler?"":"text-muted"}><span class="fa-li"><i class={props.type.storageEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.type.storage}</li>
              <li class={props.type.publicprojectsEnabler?"":"text-muted"}><span class="fa-li"><i class={props.type.publicprojectsEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.type.publicprojects}</li>
              <li class={props.type.accessEnabler?"":"text-muted"}><span class="fa-li"><i class={props.type.accessEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.type.access}</li>
              <li class={props.type.privateprojectsEnabler?"":"text-muted"}><span class="fa-li"><i class={props.type.privateprojectsEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.type.privateprojects}</li>
              <li class={props.type.supportEnabler?"":"text-muted"}><span class="fa-li"><i class={props.type.supportEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.type.support}</li>
              <li class={props.type.subdomainEnabler?"":"text-muted"}><span class="fa-li"><i class={props.type.subdomainEnabler?"fas fa-check":"fas fa-times"}></i></span><b>{props.type.subdomainPrefix}</b> {props.type.subdomain}
              </li>
              <li class={props.type.statusreportsEnabler?"":"text-muted"}><span class="fa-li"><i class={props.type.statusreportsEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.type.statusreports}</li>
            </ul>
            <div class="d-grid">
              {/* <a href="#" class="btn btn-primary text-uppercase">Button</a> */}
              <Button className="btn btn-primary text-uppercase">Button</Button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Card;