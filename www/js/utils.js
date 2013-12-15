//VARIABLES
            var formatDate = "dd/MM/yyyy";
            var formatTime = "HH:mm";
            
            function getDateFromString(sDate) {
				var newDate = new Date();
				
				if(sDate != null && sDate.length == formatDate.length) {
					var sDay = sDate.substr(0,2);
					var sMonth = sDate.substr(3,2);
					var sYear = sDate.substr(6,4)
					//myNewTime.setHours(time.substr(0, 2));
					newDate = new Date(Number(sYear), Number(sMonth)-1, Number(sDay));
				}
				
				return newDate 
			};
			
			function formatDateToString(dDate) {
				var sRet = "";
				
				if(dDate != null) {
					var sDay = dDate.getDate().toString();
					var sMonth = (dDate.getMonth()+1).toString();
					var sYear = dDate.getFullYear().toString();
					
					if(sDay.length < 2) {
						sDay = "0" + sDay;
					}
					if(sMonth.length < 2) {
						sMonth = "0" + sMonth;
					}
					sRet = sDay + "/" + sMonth + "/" + sYear;
				}

				return sRet;
			}
			
			function getTimeFromString(sDate) {
				var newDate = new Date();
				
				if(sDate != null && sDate.length == formatTime.length) {
					var sHour = sDate.substr(0,2);
					var sMinute = sDate.substr(3,2);
					//myNewTime.setHours(time.substr(0, 2));
					newDate = new Date(0, 0, 0, Number(sHour), Number(sMinute));
				}
				
				return newDate 
			};
			
			function formatTimeToString(dDate) {
				var sRet = "";
				
				if(dDate != null) {
					var sHour = dDate.getHours().toString();
					var sMinute = dDate.getMinutes().toString();
					
					if(sHour.length < 2) {
						sHour = "0" + sHour;
					}
					if(sMinute.length < 2) {
						sMinute = "0" + sMinute;
					}
					sRet = sHour + ":" + sMinute;
				}

				return sRet;
			}
			
			function parsePercent(value) {
				var newValue = Math.floor(value);
				
				if(newValue > 100)
					newValue = 100;
				
				return newValue;
			}
