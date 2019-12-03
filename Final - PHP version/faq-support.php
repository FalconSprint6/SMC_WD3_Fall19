<?php $title = "Support"; ?>

<?php require_once('head.php'); ?>
<?php require_once('header.php'); ?>
       
       
       <div class="alert alert-success alert-dismissible fade" role="alert" id="buttonAlert">
                <strong>Got it!</strong> We'll get back to you soon.
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
          </div>
    <section class="accordion-section clearfix mt-3" aria-label="Question Accordions">
            <div class="container">
                <h3 class="h__h3--loud">Frequently Asked Questions</h3>
                <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                  <div class="panel panel-default">
                    <div class="panel-heading p-3 mb-3" role="tab" id="heading0">
                      <h3 class="panel-title">
                        <a class="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse0" aria-expanded="true" aria-controls="collapse0">
                          Why hasn't my order arrived?
                        </a>
                      </h3>
                    </div>
                    <div id="collapse0" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading0">
                      <div class="panel-body px-3 mb-4">
                        <p>Could be a few things:</p>
                        <ul>
                          <li>Your payment may still be processing.</li>
                          <li>Your order may be in transit.</li>
                          <li>Maybe wait a little.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div class="panel panel-default">
                    <div class="panel-heading p-3 mb-3" role="tab" id="heading1">
                      <h3 class="panel-title">
                        <a class="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse1" aria-expanded="true" aria-controls="collapse1">
                          Do you really just sell cat mugs?
                        </a>
                      </h3>
                    </div>
                    <div id="collapse1" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading1">
                      <div class="panel-body px-3 mb-4">
                        <p>Yup, take a look around the site.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div class="panel panel-default">
                    <div class="panel-heading p-3 mb-3" role="tab" id="heading2">
                      <h3 class="panel-title">
                        <a class="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse2" aria-expanded="true" aria-controls="collapse2">
                          Are there really that many cat mugs in existence?
                        </a>
                      </h3>
                    </div>
                    <div id="collapse2" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading2">
                      <div class="panel-body px-3 mb-4">
                        <p>Yeah, there's a lot.</p>
                      </div>
                    </div>
                  </div>
                </div>
             <h3 class="h__h3--loud">Contact Us</h3>   
             <form class="needs-validation" method="post">
                    <div class="form-row">
                            <div class="col">
                              <input type="text" id="firstName" class="form-control mb-3" placeholder="Please enter your first name" required="">
                            </div>
                            <div class="invalid-feedback">
                                Please enter your first name
                            </div>
                            <div class="col">
                              <input type="text" id="lastName" class="form-control mb-3" placeholder="Please enter your last name" required="">
                            </div>
                            <div class="invalid-feedback">
                                    Please enter your last name
                                </div>
                          </div>
                    <div class="form-group">
                      <input type="email" class="form-control" id="email" placeholder="Please enter your email" required="">
                      <div class="invalid-feedback">
                            Please enter your email
                        </div>
                    </div>
                    
                    <div class="form-group">
                      <textarea class="form-control" id="text" rows="3" placeholder="Please describe your problem"></textarea>
                    </div>
                    <button type="submit" id="submit" class="btn btn-primary" disabled="disabled">Submit</button>
                  </form>
            </div>
    </section>

    <?php require_once('footer.php'); ?>