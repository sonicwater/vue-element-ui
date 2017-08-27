<template>
	<div>
        <el-table :data="users.data" border style="width: 100%"
    		:default-sort = "{prop: 'date', order: 'descending'}">
		    <el-table-column prop="date" label="日期" sortable width="180"></el-table-column>
		    <el-table-column prop="name" label="姓名" sortable width="180"></el-table-column>
		    <el-table-column prop="address" label="地址" :formatter="formatter"></el-table-column>
	  	</el-table>
	  	<div class="block">
		  	<el-pagination layout="prev, pager, next" :total='users.total' @size-change="changeSize" current-change='changePage' :current-page='users.currentPage' :page-size='users.pageSize'></el-pagination>
		</div>
    </div>
  	
</template>
<script>

    export default{
        name:'test',
        data() {
            return {
            	users: {
			        data: [
		                {
				          	date: '2016-05-02',
				          	name: '王小虎',
				          	address: '上海市普陀区金沙江路 1518 弄'
				        }, {
				          	date: '2016-05-04',
				          	name: '赵小虎',
				          	address: '上海市普陀区金沙江路 1517 弄'
				        }, {
				          	date: '2016-05-01',
				          	name: '张小虎',
				          	address: '上海市普陀区金沙江路 1519 弄'
				        }, {
				          	date: '2016-05-03',
				          	name: '郗小虎',
				          	address: '上海市普陀区金沙江路 1516 弄'
				        }, {
				          	date: '2016-05-05',
				          	name: '野小虎',
				          	address: '上海市普陀区金沙江路 1516 弄'
				        }, {
				          	date: '2016-05-06',
				          	name: '单小虎',
				          	address: '上海市普陀区金沙江路 1516 弄'
				        }
			        ],
			        total: 6,
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
	      	changePage(pager) {
		      	this.users.currentPage = pager;
		      	this.getdata({ page: this.users.currentPage, pagesize: this.users.pageSize })
		    },
	      	changeSize() {
		      	this.users.currentPage = 1
		      	this.users.pageSize = 5;
		      	this.getdata({ pagesize: this.users.pageSize })
		    },
	    }
    }
</script>