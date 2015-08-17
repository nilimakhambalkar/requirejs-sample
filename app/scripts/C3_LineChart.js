/**
 * Created by vijay on 8/16/2015.
 */
define(function(){
    function LineChart(element,model){
        //var seriesList =  model.getSeries();

        if(!model)
        {
            throw  "charModel empty, please make sure chartModel is not empty"
        }
        function convertSeries(seriesList){
            //make columns
            var columns = [];
            var series = [];
            for(var i=0;i<seriesList.length; i++){
                series = [seriesList[i].label].concat(seriesList[i].data);
                columns.push(series);
            }

            return columns;
        }

        function render(){

            chart = c3.generate({
                bindto: elm,
                data: {
                    columns: convertSeries(model.getSeries())
                },
                names: {
                    "googlePrice": "Google"
                }
            });
        }

        var elm = '#'+element;
        //var elm = element;
        var chart;

        model.subscribe("change", function(){
            render();
        })


    }

    return LineChart;
})