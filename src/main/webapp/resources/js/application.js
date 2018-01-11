$(document).ready(function(){
	
	//listen to button event
	$("#load-list-btn").bind("click", function(){
		
		$("#employees-table tbody").empty();
		
		//do ajax call
		$.ajax({
			type:"post",
			url:"list/employees/",
			contentType: "application/json; charset=utf-8",
			headers: {},
	        dataType:"json",
	        data:null,
	        success: function(data, textStatus, XMLHttpRequest) {
	        	
	        	for(var i = 0; i < data.length; i++){
	        		
	        		var employee = data[i];
	        		
	        		var html = [
	        		    "<tr>",
	        		    	"<td>",
	        		    		employee.id,
	        		    	"</td>",
	        		    	"<td>",
        		    			employee.firstName,
        		    		"</td>",
        		    		"<td>",
    		    				employee.lastName,
    		    			"</td>",
    		    			"<td>",
    		    				employee.department,
    		    			"</td>",
    		    			"<td>",
    		    			    employee.role,
    		    			"</td>",
    		    			"<td>",
    		    				employee.salary,
    		    			"</td>",
	        		    "</tr>"
	        		].join("");
	        		
	        		$("#employees-table tbody").append(html);
	        	}
	        	
	        },
	        error: function(xhr, status, error){
	             alert(xhr.responseText);
	         }
		});
	});
	
	
	//listen to button event
	$("#insert-btn").bind("click", function(){
		//do ajax call
		$.ajax({
			type:"post",
			url:"insert/",
			contentType: "application/json; charset=utf-8",
			headers: {},
	        dataType:"json",
	        data:null
		});
	});
	
	//listen to button event
	$("#load-btn").bind("click", function(){
		
		$("#employees-table tbody").empty();
		
		var employeeId = $("#employeeId").val();
		if (employeeId == null || employeeId.length <= 0) {
			return;
		}
		
		//do ajax call
		$.ajax({
			type:"post",
			url:"employee?employeeId=" + employeeId,
			contentType: "application/json; charset=utf-8",
			headers: {},
	        dataType:"json",
	        data:null,
	        success: function(data, textStatus, XMLHttpRequest) {
	        	var html = [
	        	   "<tr>",
	        	  	"<td>",
	        		   data.id,
	        		 "</td>",
	        		  "<td>",
        		    	data.firstName,
        		      "</td>",
        		      "<td>",
    		    		data.lastName,
    		    	  "</td>",
    		    	  "<td>",
    		    		data.department,
    		    	  "</td>",
    		    	  "<td>",
    		    		data.role,
    		    	  "</td>",
    		    	  "<td>",
    		    		data.salary,
    		    	  "</td>",
	        		 "</tr>"
	        		].join("");
	        		$("#employees-table tbody").append(html);
	        	
	        },
	        error: function(xhr, status, error){
	             Console.log(xhr.responseText);
	         }
		});
	});
	
	
	//listen to batch insert button event
	$("#batch-btn").bind("click", function(){
		
		$("#employees-table tbody").empty();
		
		var number = $("#batch-number").val();
		if (number == null || number.length <= 0) {
			return;
		}
		
		//do ajax call
		$.ajax({
			type:"post",
			url:"employee/inject?number=" + number,
			contentType: "application/json; charset=utf-8",
			headers: {},
	        dataType:"json",
	        data:null,
	        success: function(data, textStatus, XMLHttpRequest) {
	        	var html = [
	        	   "<tr>",
	        	  	"<td>",
	        		   data.id,
	        		 "</td>",
	        		  "<td>",
        		    	data.firstName,
        		      "</td>",
        		      "<td>",
    		    		data.lastName,
    		    	  "</td>",
    		    	  "<td>",
    		    		data.department,
    		    	  "</td>",
    		    	  "<td>",
    		    		data.role,
    		    	  "</td>",
    		    	  "<td>",
    		    		data.salary,
    		    	  "</td>",
	        		 "</tr>"
	        		].join("");
	        		$("#employees-table tbody").append(html);
	        	
	        },
	        error: function(xhr, status, error){
	             Console.log(xhr.responseText);
	         }
		});
	});
	
});