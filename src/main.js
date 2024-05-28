import { createApp } from 'vue';
import App from './App.vue';
import TheResource from './components/learning-resources/TheResource.vue';
import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';
import BaseDialog from "./components/UI/BaseDialog.vue";

const app = createApp(App);

app.component('the-resource',TheResource);
app.component('base-dialog',BaseDialog);
app.component('base-card',BaseCard);
app.component('base-button',BaseButton);
app.mount('#app');
