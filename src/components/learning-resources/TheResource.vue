<template>
    <base-card>
        <base-button :mode="storedResourceBtnMode" @click="setSelectedTab('stored-resources')">Stored Resources</base-button>

        <base-button :mode="addResourceBtnMode" @click="setSelectedTab('add-resource')">Add Resource</base-button>
    </base-card>
    <keep-alive>
        <component :is="selectedTab"></component>
    </keep-alive>
</template>

<script>

import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default({
    components:{
        StoredResources,AddResource
    },
    provide(){
        return{
            resources:this.storedResources,
            addResource:this.addResource,
            removeResource:this.removeResource
        }
    },
    computed:{
        storedResourceBtnMode(){
            return this.selectedTab === 'stored-resources' ? null : 'flat'
        },

        addResourceBtnMode(){
            return this.selectedTab === 'add-resource' ? null : 'flat'
        }
    },
    data(){
        return {
            selectedTab:'stored-resources',
            storedResources: [
            {
                id: 'google',
                title: 'Google',
                description: 'Google is an essential tool for learning about almost anything.',
                link: 'https://google.com'
            },
            {
                id: 'udemy',
                title: 'Udemy',
                description: 'Udemy offers thousands of courses at very reasonable prices.',
                link: 'https://udemy.com'
            }]
        }
    },

    methods:{
        setSelectedTab(tab){
            this.selectedTab = tab;
        },
        addResource(title,description,url){
            const newResource = {
                id: new Date().toISOString(),
                title,description,url
            };

            this.storedResources.unshift(newResource);
            this.selectedTab = 'stored-resources';
        },
        removeResource(resId){
            const resourceIndex = this.storedResources.findIndex(res => res.id === resId);
            this.storedResources.splice(resourceIndex,1);
        }
    }
})
</script>
