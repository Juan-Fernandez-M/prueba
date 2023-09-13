function handleErrorDatabase (errors) {
    errors.map(error => {
        if (error.name){
            return {message: 'error en el nombre'}
        }
    })
}