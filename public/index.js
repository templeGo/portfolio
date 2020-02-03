$(document).on('click','#worknav', function()
{
    showWorkView();
});

$(document).on('click','#aboutnav', function()
{
    showAboutView();
});

function showAboutView()
{
    $("#about").show();
    $("#work").hide();
}

function showWorkView()
{
    $("#about").hide();
    $("#work").show();
}