

//Declairing the variables
const gulp          =   require ('gulp');
//const imagemin      =   require ('gulp-imagemin');
//const uglify        =   require ('gulp-uglify');
const sass          =   require ('gulp-sass');
const browserSync   =   require ('browser-sync');
const reload        =   browserSync.reload;


//Compile sass
gulp.task('sass', ()=>{
    return gulp.src('src/sass/*.scss')
        .pipe(sass().on('error',sass.logError))
        .pipe(gulp.dest('./des/css/'))
        .pipe(reload({stream:true}));
});

//Browser Sync
gulp.task('browser-sync', ()=>
    browserSync({
        server:{
            baseDir: './des'
        }
    })
);

//HTML task
gulp.task('html', ()=>
    gulp.src('src/index.html')
    .pipe(gulp.dest('./des'))
    .pipe(reload({stream:true}))
);

//Watch
gulp.task('watch', ()=>{
    gulp.watch('src/sass/*.scss', ['sass']);
    //gulp.watch('images/*', ['imagemin'])
    gulp.watch('des/index.html', ['html']);
});


//Optimize image
// gulp.task('imagemin', ()=>
//     gulp.src('imgs/*')
//         .pipe(imagemin())
//         .pipe(gulp.dest('images'))
// );


//Default task
gulp.task('default', ['sass','browser-sync', 'watch']);

