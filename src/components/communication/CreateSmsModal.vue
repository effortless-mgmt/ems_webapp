<template>
  <b-modal id="createSms" @shown="focusTextField" title="Send sms" centered>
    <div class="recipients">
      <b-badge
        pill
        variant="secondary"
        v-for="(item) in recipients"
        :key="item.id"
      >{{ item.firstName }} {{ item.lastName }}</b-badge>
    </div>
    <b-form>
      <b-input-group label="Message" label-for="messageInput">
        <b-textarea
          id="messageInput"
          ref="textField"
          type="text"
          placeholder="Enter message.."
          style="height: 200px"
          v-model="message"
        ></b-textarea>
      </b-input-group>
    </b-form>
    <div @click="send()" slot="modal-ok">Send</div>
  </b-modal>
</template>

<script>
export default {
  data() {
    return {
      message: ""
    };
  },
  computed: {
    recipients() {
      return this.$store.state.communication.smsRecipients;
    }
  },
  methods: {
    focusTextField(e) {
      this.$refs.textField.focus();
    },
    send() {
      this.$root.$emit("bv::hide::popover");
      this.$store.dispatch("communication/sendMessage", this.message);
      var recipString = "";
      var recipCount = this.recipients.length;
      this.recipients.forEach(r => {
        recipString += r.firstName + " " + r.lastName + ", ";
      });
      this.$toast.success(
        "Successfully sent a message to " +
          recipCount +
          " recipients: " +
          recipString
      );
    }
  }
};
</script>

<style>
</style>
