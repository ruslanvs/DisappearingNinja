$(document).ready(function() {

    
    $( 'img' ).click( function () {
        console.log ('click!');
        
        $( 'img' ).each( function ( i, img ) {
            $( this ).attr( 'id', "img" + i );
            console.log ($( this ).attr( 'id' ));
        })


        
        /* THIS WAS AN INITIAL APPROACH WITH MANUALLY SET ID'S AND MANUALLY SET WIDTH
        var currentId;
        var arr=[];
        var nextId;
        var margin;

        currentId = $( this ).attr( 'id' );
        console.log (currentId);

        arr = currentId.split('img');
        console.log (arr);

        nextId = 'img' + (Number (arr [1]) + 1);
        console.log ( nextId );

        check = $( '#' + nextId ).attr( 'id' );
        console.log ( check );

        margin = $( '#' + nextId ).css('margin-left');
        mnrarr = margin.split('px');
        console.log (mnrarr);
        mrn = Number ( mnrarr[0] )

        console.log (margin, mrn  );

        margin = mrn + 160;
        console.log (margin);

        $( '#' + nextId ).css( 'margin-left', margin )
        console.log ($( '#' + nextId ).css('margin-left' )); */

        $( this ).hide ();

    })

})