
<template>
    <base-dialog v-if="inputIsInValid" 
    title="Invalid Input" @close="confirmError">
        <template #default>
            <p>Atleast one input is invalid.</p>
            <p>Please make sure to add a few characters into each input field.</p>
        </template>

        <template #actions>
            <base-button @click="confirmError">Okay</base-button>
        </template>
    </base-dialog>

    <base-card>
        <form @submit.prevent="submitData">
            <div class="form-control">
                 <label for="title">Title</label>  
                 <input type="text" name="title" id="title" ref="title">
            </div>
            
            <div class="form-control">
                 <label for="description">Description</label>  
                 <textarea name="description" id="description" rows="3" ref="description"></textarea>
            </div> 

            <div class="form-control">
                 <label for="link">Link</label>  
                 <input type="url" name="link" id="link" ref="link">
            </div>  

            <div>
                <base-button type="submit">Submit</base-button>
            </div>         
        </form>    
    </base-card>

</template>
<script>

export default ({
    inject:['addResource'],
    data(){
        return{
            inputIsInValid: false
        }
    },
    methods:{
        submitData(){
            const title = this.$refs.title.value;
            const description = this.$refs.description.value;
            const link = this.$refs.link.value;

            if(title.trim() === '' || description.trim() === '' || link.trim() === ''){
                this.inputIsInValid = true;
                return;
            }

            this.addResource(title,description,link);

            // Clear the input fields
            this.$refs.title.value = '';
            this.$refs.description.value = '';
            this.$refs.link.value = '';
        },
        confirmError(){
            this.inputIsInValid = false;
        }
    }
})
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
