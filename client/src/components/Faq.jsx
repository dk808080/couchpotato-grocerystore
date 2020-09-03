import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/faq.css";
function Faq() {
  return (
    <div>
      <div class="container container-faq">
        <h1>Help & FAQs</h1>
        <div class="row">
          <div class="col-lg-4">
            <div
              className="nav nav-pills faq-nav"
              id="faq-tabs"
              role="tablist"
              aria-orientation="vertical"
            >
              <a
                href="#tab1"
                class="nav-link active"
                data-toggle="pill"
                role="tab"
                aria-controls="tab1"
                aria-selected="true"
              >
                <i class="fa fa-question-circle" aria-hidden="true"></i>{" "}
                Frequently Asked Questions
              </a>
              <a
                href="#tab2"
                class="nav-link"
                data-toggle="pill"
                role="tab"
                aria-controls="tab2"
                aria-selected="false"
              >
                <i class="fa fa-money" aria-hidden="true"></i> Payments/Refund
                related queries
              </a>
              <a
                href="#tab3"
                class="nav-link"
                data-toggle="pill"
                role="tab"
                aria-controls="tab3"
                aria-selected="false"
              >
                <i class="fa fa-shopping-cart" aria-hidden="true"></i> Placing
                an order
              </a>
              <a
                href="#tab4"
                class="nav-link"
                data-toggle="pill"
                role="tab"
                aria-controls="tab4"
                aria-selected="false"
              >
                <i class="fa fa-truck" aria-hidden="true"></i> Delivery related
                queries
              </a>
              <a
                href="#tab5"
                class="nav-link"
                data-toggle="pill"
                role="tab"
                aria-controls="tab5"
                aria-selected="false"
              >
                <i class="fas fa-sync-alt"></i> Returns & Refunds
              </a>
              <a
                href="#tab6"
                class="nav-link"
                data-toggle="pill"
                role="tab"
                aria-controls="tab6"
                aria-selected="false"
              >
                <i class="fa fa-question" aria-hidden="true"></i> General help
              </a>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="tab-content" id="faq-tab-content">
              <div
                class="tab-pane show active"
                id="tab1"
                role="tabpanel"
                aria-labelledby="tab1"
              >
                <div class="accordion" id="accordion-tab-1">
                  <div class="card">
                    <div class="card-header" id="accordion-tab-1-heading-1">
                      <h5>
                        <button
                          class="btn btn-link"
                          type="button"
                          data-toggle="collapse"
                          data-target="#accordion-tab-1-content-1"
                          aria-expanded="false"
                          aria-controls="accordion-tab-1-content-1"
                        >
                          Do you deliver to my location?
                        </button>
                      </h5>
                    </div>
                    <div
                      class="collapse show"
                      id="accordion-tab-1-content-1"
                      aria-labelledby="accordion-tab-1-heading-1"
                      data-parent="#accordion-tab-1"
                    >
                      <div class="card-body">
                        <p>
                          We deliver in select localities across the cities we
                          are present in. You can edit your location settings to
                          check if we deliver in your area.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="accordion-tab-1-heading-2">
                      <h5>
                        <button
                          class="btn btn-link"
                          type="button"
                          data-toggle="collapse"
                          data-target="#accordion-tab-1-content-2"
                          aria-expanded="false"
                          aria-controls="accordion-tab-1-content-2"
                        >
                          Do you charge any amount or taxes over and above the
                          rates shown?
                        </button>
                      </h5>
                    </div>
                    <div
                      class="collapse"
                      id="accordion-tab-1-content-2"
                      aria-labelledby="accordion-tab-1-heading-2"
                      data-parent="#accordion-tab-1"
                    >
                      <div class="card-body">
                        <p>
                          No, we do not charge anything over and above the rates
                          shown. However, we do have a delivery fee in case the
                          order value per store does not reach the minimum order
                          value for free delivery.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="accordion-tab-1-heading-3">
                      <h5>
                        <button
                          class="btn btn-link"
                          type="button"
                          data-toggle="collapse"
                          data-target="#accordion-tab-1-content-3"
                          aria-expanded="false"
                          aria-controls="accordion-tab-1-content-3"
                        >
                          What should I do if my order is approved but hasn't
                          been shipped yet??
                        </button>
                      </h5>
                    </div>
                    <div
                      class="collapse"
                      id="accordion-tab-1-content-3"
                      aria-labelledby="accordion-tab-1-heading-3"
                      data-parent="#accordion-tab-1"
                    >
                      <div class="card-body">
                        <p>
                          Sellers usually ship orders 1-2 business days before
                          the delivery date so that they reach you on time. In
                          case your order hasn't been shipped within this time
                          please contact our Customer Support so that we can
                          look into it.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="accordion-tab-1-heading-4">
                      <h5>
                        <button
                          class="btn btn-link"
                          type="button"
                          data-toggle="collapse"
                          data-target="#accordion-tab-1-content-4"
                          aria-expanded="false"
                          aria-controls="accordion-tab-1-content-4"
                        >
                          How do I know my order has been confirmed?
                        </button>
                      </h5>
                    </div>
                    <div
                      class="collapse"
                      id="accordion-tab-1-content-4"
                      aria-labelledby="accordion-tab-1-heading-4"
                      data-parent="#accordion-tab-1"
                    >
                      <div class="card-body">
                        <p>
                          An e-mail & SMS will be sent once you've successfully
                          placed your order. We'll also let you know as soon as
                          the seller ships the item(s) to you along with the
                          tracking number(s) for your shipment(s). You can track
                          your orders from the 'My Orders' section on your
                          Flipkart account.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="accordion-tab-1-heading-5">
                      <h5>
                        <button
                          class="btn btn-link"
                          type="button"
                          data-toggle="collapse"
                          data-target="#accordion-tab-1-content-5"
                          aria-expanded="false"
                          aria-controls="accordion-tab-1-content-5"
                        >
                          How can I make changes to my order before and after
                          confirmation?
                        </button>
                      </h5>
                    </div>
                    <div
                      class="collapse"
                      id="accordion-tab-1-content-5"
                      aria-labelledby="accordion-tab-1-heading-5"
                      data-parent="#accordion-tab-1"
                    >
                      <div class="card-body">
                        <p>
                          You can edit your products in the cart before
                          checkout. If you’ve already placed your order, you can
                          cancel and reorder with the required list from the app
                          and this will be soon released on web as well.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane"
                id="tab2"
                role="tabpanel"
                aria-labelledby="tab2"
              >
                <div class="accordion" id="accordion-tab-2">
                  <div class="card">
                    <div class="card-header" id="accordion-tab-2-heading-1">
                      <h5>
                        <button
                          class="btn btn-link"
                          type="button"
                          data-toggle="collapse"
                          data-target="#accordion-tab-2-content-1"
                          aria-expanded="false"
                          aria-controls="accordion-tab-2-content-1"
                        >
                          How long do you take to initiate my refund?
                        </button>
                      </h5>
                    </div>
                    <div
                      class="collapse show"
                      id="accordion-tab-2-content-1"
                      aria-labelledby="accordion-tab-2-heading-1"
                      data-parent="#accordion-tab-2"
                    >
                      <div class="card-body">
                        <p>
                          1) For pre-paid/online transactions the refunds will
                          be credited/rolled back to your original mode of
                          payment, i.e. within 7-10 working days for
                          debit/credit card payments and 24-48 hours for other
                          wallets.
                        </p>
                        <p>
                          2) For COD related transactions the refund will
                          reflect as Grofers Cash in the Grofers wallet within
                          24 hours, or the Customer has the option to get the
                          refund in his/her designated bank account via NEFT
                          (for which the Customer shall have to share the bank
                          details) and in such a case the credit of refund into
                          the designated bank account will take 7-10 working
                          days.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="accordion-tab-2-heading-2">
                      <h5>
                        <button
                          class="btn btn-link"
                          type="button"
                          data-toggle="collapse"
                          data-target="#accordion-tab-2-content-2"
                          aria-expanded="false"
                          aria-controls="accordion-tab-2-content-2"
                        >
                          How can I review my receipt?
                        </button>
                      </h5>
                    </div>
                    <div
                      class="collapse"
                      id="accordion-tab-2-content-2"
                      aria-labelledby="accordion-tab-2-heading-2"
                      data-parent="#accordion-tab-2"
                    >
                      <div class="card-body">
                        <p>
                          We handover the receipt from the merchant to you at
                          the time of delivery. Also, you can look at your
                          transaction history in the “My Orders” tab.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="accordion-tab-2-heading-3">
                      <h5>
                        <button
                          class="btn btn-link"
                          type="button"
                          data-toggle="collapse"
                          data-target="#accordion-tab-2-content-3"
                          aria-expanded="false"
                          aria-controls="accordion-tab-2-content-3"
                        >
                          What is Cash on Delivery?
                        </button>
                      </h5>
                    </div>
                    <div
                      class="collapse"
                      id="accordion-tab-2-content-3"
                      aria-labelledby="accordion-tab-2-heading-3"
                      data-parent="#accordion-tab-2"
                    >
                      <div class="card-body">
                        <p>
                          Cash on Delivery is a mode of payment in which you can
                          pay cash at the time of delivery of your order. You
                          can also pay using a credit card/ debit card if the
                          Courier Executive carries a swiping machine.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane"
                id="tab3"
                role="tabpanel"
                aria-labelledby="tab3"
              >
                <div class="accordion" id="accordion-tab-3">
                  <div class="card">
                    <div class="card-header" id="accordion-tab-3-heading-1">
                      <h5>
                        <button
                          class="btn btn-link"
                          type="button"
                          data-toggle="collapse"
                          data-target="#accordion-tab-3-content-1"
                          aria-expanded="false"
                          aria-controls="accordion-tab-3-content-1"
                        >
                          How can I be sure the fruits and vegetables I order
                          are of good quality?
                        </button>
                      </h5>
                    </div>
                    <div
                      class="collapse show"
                      id="accordion-tab-3-content-1"
                      aria-labelledby="accordion-tab-3-heading-1"
                      data-parent="#accordion-tab-3"
                    >
                      <div class="card-body">
                        <p>
                          Our fruits and vegetables vendors have a quality check
                          process in place to ensure quality of the items
                          delivered, is up to the mark. Do let us know within 24
                          Hours if you’re not happy with the quality of the
                          product received.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="accordion-tab-3-heading-2">
                      <h5>
                        <button
                          class="btn btn-link"
                          type="button"
                          data-toggle="collapse"
                          data-target="#accordion-tab-3-content-2"
                          aria-expanded="false"
                          aria-controls="accordion-tab-3-content-2"
                        >
                          How will I know if any item in my order is
                          unavailable?
                        </button>
                      </h5>
                    </div>
                    <div
                      class="collapse"
                      id="accordion-tab-3-content-2"
                      aria-labelledby="accordion-tab-3-heading-2"
                      data-parent="#accordion-tab-3"
                    >
                      <div class="card-body">
                        <p>
                          You will receive an SMS notification informing you
                          about the unavailable items in this situation. Refund
                          (if any) will also be initiated within 24 hours.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="accordion-tab-3-heading-3">
                      <h5>
                        <button
                          class="btn btn-link"
                          type="button"
                          data-toggle="collapse"
                          data-target="#accordion-tab-3-content-3"
                          aria-expanded="false"
                          aria-controls="accordion-tab-3-content-3"
                        >
                          I’m trying to place an order today but it is getting
                          scheduled for the next day. What can I do?
                        </button>
                      </h5>
                    </div>
                    <div
                      class="collapse"
                      id="accordion-tab-3-content-3"
                      aria-labelledby="accordion-tab-3-heading-3"
                      data-parent="#accordion-tab-3"
                    >
                      <div class="card-body">
                        <p>
                          Depending on store timings and store capacities, your
                          order may be scheduled for a different day.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane"
                id="tab4"
                role="tabpanel"
                aria-labelledby="tab4"
              >
                <div class="accordion" id="accordion-tab-4">
                  <div class="card">
                    <div class="card-header" id="accordion-tab-4-heading-1">
                      <h5>
                        <button
                          class="btn btn-link"
                          type="button"
                          data-toggle="collapse"
                          data-target="#accordion-tab-4-content-1"
                          aria-expanded="false"
                          aria-controls="accordion-tab-4-content-1"
                        >
                          Do you charge for delivery?
                        </button>
                      </h5>
                    </div>
                    <div
                      class="collapse show"
                      id="accordion-tab-4-content-1"
                      aria-labelledby="accordion-tab-4-heading-1"
                      data-parent="#accordion-tab-4"
                    >
                      <div class="card-body">
                        <p>
                          Every store has its own delivery charges, which are
                          waived off if you order above a specified minimum
                          amount from the store. The minimum charges and the
                          delivery charges are mentioned on the app and web at
                          the checkout page.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="accordion-tab-4-heading-2">
                      <h5>
                        <button
                          class="btn btn-link"
                          type="button"
                          data-toggle="collapse"
                          data-target="#accordion-tab-4-content-2"
                          aria-expanded="false"
                          aria-controls="accordion-tab-4-content-2"
                        >
                          What are your delivery times?
                        </button>
                      </h5>
                    </div>
                    <div
                      class="collapse"
                      id="accordion-tab-4-content-2"
                      aria-labelledby="accordion-tab-4-heading-2"
                      data-parent="#accordion-tab-4"
                    >
                      <div class="card-body">
                        <p>
                          In some locations, our deliveries begin from 6 AM and
                          the last delivery is completed by 11 PM.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="accordion-tab-4-heading-3">
                      <h5>
                        <button
                          class="btn btn-link"
                          type="button"
                          data-toggle="collapse"
                          data-target="#accordion-tab-4-content-3"
                          aria-expanded="false"
                          aria-controls="accordion-tab-4-content-3"
                        >
                          Can I change the delivery address of my order?
                        </button>
                      </h5>
                    </div>
                    <div
                      class="collapse"
                      id="accordion-tab-4-content-3"
                      aria-labelledby="accordion-tab-4-heading-3"
                      data-parent="#accordion-tab-4"
                    >
                      <div class="card-body">
                        <p>
                          At this time, we do not offer this option. You can,
                          however, cancel your order and reorder from a
                          different locality.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="accordion-tab-4-heading-4">
                      <h5>
                        <button
                          class="btn btn-link"
                          type="button"
                          data-toggle="collapse"
                          data-target="#accordion-tab-4-content-4"
                          aria-expanded="false"
                          aria-controls="accordion-tab-4-content-4"
                        >
                          What if I don’t receive my order by the scheduled
                          time?
                        </button>
                      </h5>
                    </div>
                    <div
                      class="collapse"
                      id="accordion-tab-4-content-4"
                      aria-labelledby="accordion-tab-4-heading-4"
                      data-parent="#accordion-tab-4"
                    >
                      <div class="card-body">
                        <p>
                          On rare occasions, due to unforeseen circumstances,
                          your order might be delayed. In case of imminent
                          delay, our customer support executive will keep you
                          updated about the delivery time of your order.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane"
                id="tab5"
                role="tabpanel"
                aria-labelledby="tab5"
              >
                <div class="accordion" id="accordion-tab-5">
                  <div class="card">
                    <div class="card-header" id="accordion-tab-5-heading-1">
                      <h5>
                        <button
                          class="btn btn-link"
                          type="button"
                          data-toggle="collapse"
                          data-target="#accordion-tab-5-content-1"
                          aria-expanded="false"
                          aria-controls="accordion-tab-5-content-1"
                        >
                          What If I want to return something?
                        </button>
                      </h5>
                    </div>
                    <div
                      class="collapse show"
                      id="accordion-tab-5-content-1"
                      aria-labelledby="accordion-tab-5-heading-1"
                      data-parent="#accordion-tab-5"
                    >
                      <div class="card-body">
                        <p>
                          If you’re dissatisfied with the products delivered,
                          please register a complaint via the app within 48
                          hours for non-perishable items and 24 hours for
                          perishable items. Our customer support team will get
                          in touch with you to resolve this issue.You can also
                          return the products which you are dissatisfied with,
                          at the time of delivery and we will get the refund
                          initiated for you.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="accordion-tab-5-heading-2">
                      <h5>
                        <button
                          class="btn btn-link"
                          type="button"
                          data-toggle="collapse"
                          data-target="#accordion-tab-5-content-2"
                          aria-expanded="false"
                          aria-controls="accordion-tab-5-content-2"
                        >
                          Can I reschedule my order?
                        </button>
                      </h5>
                    </div>
                    <div
                      class="collapse"
                      id="accordion-tab-5-content-2"
                      aria-labelledby="accordion-tab-5-heading-2"
                      data-parent="#accordion-tab-5"
                    >
                      <div class="card-body">
                        <p>
                          Yes, you can do this by clicking on the Need Help
                          option in “My Orders” section. You can also reschedule
                          your order as per your convenience basis the slots
                          available, provided the order is not already en route.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane"
                id="tab6"
                role="tabpanel"
                aria-labelledby="tab6"
              >
                <div class="accordion" id="accordion-tab-6">
                  <div class="card">
                    <div class="card-header" id="accordion-tab-6-heading-1">
                      <h5>
                        <button
                          class="btn btn-link"
                          type="button"
                          data-toggle="collapse"
                          data-target="#accordion-tab-6-content-1"
                          aria-expanded="false"
                          aria-controls="accordion-tab-6-content-1"
                        >
                          For any other queries Contact Us
                        </button>
                      </h5>
                    </div>
                    <div
                      class="collapse show"
                      id="accordion-tab-6-content-1"
                      aria-labelledby="accordion-tab-6-heading-1"
                      data-parent="#accordion-tab-6"
                    >
                      <div class="card-body">
                        <p>Hey there!I'm Couch Potato.</p>
                        <p>
                          <strong>Email: </strong>iam@couchpotato.in
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Faq;
