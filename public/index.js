$(document).on('click','#worknav', function()
{
    showWorkView();
});

$(document).on('click','#aboutnav', function()
{
    showAboutView();
});

$(document).on('click','.item img', function()
{
    var par = $(this).parent();
    window.location.href = $('p', par).text();
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