<template>
	<div>
        <el-table :data="users.data" border style="width: 100%"
    		:default-sort = "{prop: 'date', order: 'descending'}">
		    <el-table-column prop="date" label="日期" sortable width="180"></el-table-column>
		    <el-table-column prop="name" label="姓名" sortable width="180"></el-table-column>
		    <el-table-column prop="address" label="地址" :formatter="formatter"></el-table-column>
	  	</el-table><p>静态数据分页——没什么意义</p>
	  	<div class="block">
		  	<el-pagination 
		  		layout="prev, pager, next" 
		  		:total='users.total'
		  		:current-page='users.currentPage' 
		  		:page-size='users.pageSize'
		  		@size-change="changeSize" 
		  		@current-change='changePage' 
		  	>
		  	</el-pagination>
		  	
		</div>
    </div>
  	
</template>
<script>
	const TableData = require('./TableData_01.json');
    export default{
        name:'test',
        data() {
            return {
            	users: {
			        data: "",
			        total: 0,
			        pageSize: 5,
			        currentPage: 1,
			        tableLoad: false
		      	}
            }
        },
	    methods: {
	      	formatter(row, column) {
	        	return row.address;
	      	},
	      	getdata(pager) {
		      	this.users.total = TableData.result.length;

		      	var mod = TableData.result.length % this.users.pageSize;
		      	var end = 5;

		      	if(pager==Math.ceil(TableData.result.length/this.users.pageSize)){
		      		end = (pager-1)*this.users.pageSize + mod;
		      	}else{
		      		end = this.users.pageSize;
		      	}

		      	var arr = TableData.result.slice(
		      		(pager-1)*this.users.pageSize,
		      		end
		      		);
		      	console.log(arr);
				this.users.data = arr;
		    },
	      	changePage(pager) { //切换页
	      		console.log(pager);
		      	this.users.currentPage = pager;
		      	this.getdata(pager);
		    },
	      	changeSize(size) {
		      	this.users.currentPage = 1
		      	this.users.pageSize = size;
		      	this.getdata({ pagesize: this.users.pageSize })
		    },
	    },
	    created(){
	    	this.getdata(1);
	    }
    }
</script>
<style>
	.el-pagination {
        white-space: nowrap;
    	padding: 0px;
    	color: #48576a;
    	margin-top: 20px;
	}
</style>