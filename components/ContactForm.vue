<template>
  <div class="connect__form-container">
    <form
      id="contact-form"
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      @submit.prevent="handleSubmit"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p class="hidden">
        <label
          >Don’t fill this out if you’re human: <input name="bot-field"
        /></label>
      </p>
      <fieldset>
        <div class="form-row text firstname">
          <label class="firstname" for="firstname">First name</label>
          <input
            id="firstname"
            v-model="firstname"
            name="firstname"
            type="text"
            placeholder="Jane"
            required=""
          />
        </div>

        <div class="form-row text lastname">
          <label class="lastname" for="lastname">Last name</label>
          <input
            id="lastname"
            v-model="lastname"
            name="lastname"
            type="text"
            placeholder="Doe"
            required=""
          />
        </div>

        <div class="form-row text email">
          <label class="email" for="email">Work email</label>
          <input
            id="email"
            v-model="email.value"
            name="email"
            type="email"
            placeholder="jane.doe@example.com"
            required=""
          />
        </div>
        <div class="form-row text phone">
          <label class="phone" for="phone">Phone number</label>
          <input
            id="phone"
            v-model="phone"
            name="phone"
            type="text"
            placeholder="+44"
            required=""
          />
        </div>
        <div class="form-row text website">
          <label class="website" for="website">Company website</label>
          <input
            id="website"
            v-model="website"
            name="website"
            type="text"
            placeholder="example.com"
            required=""
          />
        </div>
        <div class="form-row country">
          <label class="country" for="country">Country</label>
          <div class="select-container">
            <select id="country" v-model="country" name="country" required="">
              <option disabled="" value="">Choose country…</option>
              <option value="GB +44">United Kingdom</option>
              <option
                v-for="nation in countryList"
                :key="nation.code"
                :value="`${nation.code} +${nation.phone}`"
              >
                {{ nation.name }}
              </option>
            </select>
          </div>
        </div>
        <div class="form-row enquiry-type">
          <label class="enquiry" for="enquiry">Nature of enquiry</label>
          <div class="select-container">
            <select id="enquiry" v-model="enquiry" name="enquiry" required="">
              <option disabled selected value="">Select option...</option>
              <option value="sales">Sales</option>
              <option value="support">Tech Support</option>
              <option value="careers">Careers</option>
              <option value="general">General</option>
            </select>
          </div>
        </div>
        <div class="form-row opt-in">
          <input
            id="opt-in"
            v-model="optIn"
            type="checkbox"
            name="mailing-list"
          />
          <label for="opt-in"
            ><p>
              Opt-in to receive email updates from Elwood. You can unsubscribe
              from these communications at any time. For more information on how
              to unsubscribe, view our <a>Privacy Policy</a>.
            </p></label
          >
        </div>
      </fieldset>
      <transition name="quick-fade" mode="out-in">
        <div v-if="submitted && errors.length" class="submit-row error">
          <p>
            Something went wrong on our end. Sorry about that. You can still
            contact us at
            <a href="mailto:mailto:sales@elwoodam.io" class="common-Link"
              >sales@elwoodam.io</a
            >
          </p>
        </div>
      </transition>
      <transition name="quick-fade" mode="out-in">
        <div v-show="submitted && !errors.length" class="submit-row thanks">
          <p>
            <strong>Thanks for connecting.</strong> Someone from our team will
            be in touch soon.
          </p>
        </div>
      </transition>
      <div v-show="!submitted" class="submit-row">
        <input
          type="submit"
          class="submit-button btn__solid--purple"
          value="Connect with us"
          :disabled="submitting"
        />
      </div>
    </form>
  </div>
</template>
<script>
// import countryCodes from "country-codes-list";
import { countries } from "countries-list";

export default {
  data() {
    return {
      errors: [],
      firstname: null,
      lastname: null,
      country: "GB +44",
      phone: null,
      email: { value: null, valid: false },
      website: null,
      enquiry: "",
      optIn: false,
      submitting: false,
      submitted: false,
    };
  },
  computed: {
    countryList() {
      const list = [];
      for (const key in countries) {
        const country = {
          code: key.toString(),
          name: countries[key].name,
          phone: countries[key].phone,
        };
        if (country.name !== "South Georgia and the South Sandwich Islands")
          list.push(country);
      }
      return list;
    },
  },
  watch: {
    // watching nested property
    "email.value"(value) {
      this.validate("email", value);
      console.log(value, this.email.valid);
    },
  },
  methods: {
    validate(type, value) {
      if (type === "email") {
        this.email.valid = !!this.validEmail(value);
      }
    },
    validEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    handleSubmit(e) {
      e.preventDefault();
      console.log("submit");
      if (!this.email.valid) {
        this.errors.push("Please enter a valid email address.");
        return;
      }
      this.submitting = true;
      const myForm = document.getElementById("contact-form");
      const formData = new FormData(myForm);
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      })
        .then(() => {
          setTimeout(() => {
            this.submitted = true;
          }, 100);
        })
        .catch((error) => {
          this.errors.push(error);
        });
    },
  },
};
</script>
