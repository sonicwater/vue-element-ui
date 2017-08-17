<template>
    <div class="col-sm-10"> 
        <div class="bread-crumb"> 
            <ul class="breadcrumb"> 
                <li>
                    <span class="glyphicon glyphicon-home"></span>
                    <a href="#">Home</a>
                </li> 
                <li>
                    <a href="#">表格示例</a>
                </li> 
                <li>用户管理{{msg}}</li> 
            </ul> 
        </div> 
        <div class="panle panel-success"> 
            <div class="panel-heading"> 
                <a class="panel-title">用户管理</a> 
            </div> 
            <div class="panel-body"> 
                <table class="table table-striped table-hover"> 
                    <thead> 
                        <tr> 
                            <th class="text-center">ID</th>
                            <th class="text-center">brand</th>
                            <th class="text-center">name</th>
                            <th class="text-center">channel</th>
                            <th class="text-center">inventory</th>
                            <th class="text-center">price</th>
                            <th class="text-center">isSale</th>
                            <th class="text-center">operation</th>
                        </tr> 
                    </thead> 
                    <tbody> 
                        <tr> 
                            <td>1</td> 
                            <td>Apple</td> 
                            <td>Plus 6</td> 
                            <td>4G</td> 
                            <td>10</td> 
                            <td>4500</td> 
                            <td>yes</td> 
                            <td>add</td> 
                        </tr> 
                        <tr> 
                            <td>2</td> 
                            <td>Apple</td> 
                            <td>Plus 6</td> 
                            <td>4G</td> 
                            <td>10</td> 
                            <td>4500</td> 
                            <td>yes</td> 
                            <td>add</td> 
                        </tr> 
                        <tr> 
                            <td>3</td> 
                            <td>Apple</td> 
                            <td>Plus 6</td> 
                            <td>4G</td> 
                            <td>10</td> 
                            <td>4500</td> 
                            <td>yes</td> 
                            <td>add</td> 
                        </tr> 
                    </tbody> 
                    <tfoot> 
                        <tr> 
                            <td colspan="8"> 
                                <ul class="pagination"> 
                                    <li><a href="#">«</a></li> 
                                    <li><a href="#">1</a></li> 
                                    <li><a href="#">2</a></li> 
                                    <li><a href="#">3</a></li> 
                                    <li><a href="#">4</a></li> 
                                    <li><a href="#">5</a></li> 
                                    <li><a href="#">»</a></li> 
                                </ul> 
                            </td> 
                        </tr> 
                    </tfoot> 
                </table> 
            </div> 
        </div> 
    </div> 
</template>
<script>

    export default{
        name:'test',
        data() {
            return {
                msg: "1",
                price:1
            }
        },
    }
</script>