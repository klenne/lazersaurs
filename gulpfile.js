// Definimos o diretório dos arquivos para evitar repetição futuramente

// Todos os arquivos CSS que serão compactados
// Explicação: /* busca todos os arquivos de uma pasta, /**/*.* busca todos os arquivos de uma pasta e sub pasta.
var dest = 'assets/css/minify'
var css = [
    'assets/css/*.css'
];


// Núcleo do Gulp
var gulp = require('gulp');

// Minifica o CSS
var cssmin = require("gulp-cssmin");

// Agrupa todos arquivos em UM
var concat = require("gulp-concat");

// Transforma o javascript em formato ilegível para humanos
var uglify = require("gulp-uglify");

// Remove comentários CSS
var stripCssComments = require('gulp-strip-css-comments');

// Processo que agrupará todos os arquivos CSS, removerá comentários CSS e minificará.
gulp.task('minify-css', function (done) {
    gulp.src(css)
        .pipe(concat('style.min.css'))
        .pipe(stripCssComments({ all: true }))
        .pipe(cssmin())
        .pipe(gulp.dest(dest));
        done();
});

gulp.task('default', function () {
    gulp.watch(css, gulp.series(['minify-css']));
  });






 
