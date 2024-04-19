if(!customElements.get("recipient-form")){let e={};function subscribe(t,i){return void 0===e[t]&&(e[t]=[]),e[t]=[...e[t],i],function(){e[t]=e[t].filter((e=>e!==i))}}customElements.define("recipient-form",class extends HTMLElement{constructor(){super(),this.recipientFieldsLiveRegion=this.querySelector(`#Recipient-fields-live-region-${this.dataset.sectionId}`),this.checkboxInput=this.querySelector(`#Recipient-checkbox-${this.dataset.sectionId}`),this.checkboxInput.disabled=!1,this.hiddenControlField=this.querySelector(`#Recipient-control-${this.dataset.sectionId}`),this.hiddenControlField.disabled=!0,this.emailInput=this.querySelector(`#Recipient-email-${this.dataset.sectionId}`),this.nameInput=this.querySelector(`#Recipient-name-${this.dataset.sectionId}`),this.messageInput=this.querySelector(`#Recipient-message-${this.dataset.sectionId}`),this.sendonInput=this.querySelector(`#Recipient-send-on-${this.dataset.sectionId}`),this.offsetProperty=this.querySelector(`#Recipient-timezone-offset-${this.dataset.sectionId}`),this.offsetProperty&&(this.offsetProperty.value=(new Date).getTimezoneOffset().toString()),this.errorMessageList=this.errorMessageWrapper?.querySelector("ul"),this.defaultErrorHeader=this.errorMessage?.innerText,this.currentProductVariantId=this.dataset.productVariantId,this.addEventListener("change",this.onChange.bind(this)),this.onChange()}cartUpdateUnsubscriber=void 0;variantChangeUnsubscriber=void 0;cartErrorUnsubscriber=void 0;connectedCallback(){}disconnectedCallback(){}onChange(){this.checkboxInput.checked?(this.enableInputFields(),this.recipientFieldsLiveRegion.innerText=window.T4Sstrings.recipientFormExpanded):(this.clearInputFields(),this.disableInputFields(),this.recipientFieldsLiveRegion.innerText=window.T4Sstrings.recipientFormCollapsed)}inputFields(){return[this.emailInput,this.nameInput,this.messageInput,this.sendonInput]}disableableFields(){return[...this.inputFields(),this.offsetProperty]}clearInputFields(){this.inputFields().forEach((e=>e.value=""))}enableInputFields(){this.disableableFields().forEach((e=>e.disabled=!1))}disableInputFields(){this.disableableFields().forEach((e=>e.disabled=!0))}displayErrorMessage(e,t){}createErrorListItem(e,t){}resetRecipientForm(){this.checkboxInput.checked&&(this.checkboxInput.checked=!1,this.clearInputFields())}})}
