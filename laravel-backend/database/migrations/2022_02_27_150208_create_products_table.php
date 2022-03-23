<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug');
            $table->integer('cat_id');
            $table->string('image');
            $table->boolean('isFeatured');
            $table->string('featuredImage');
            $table->float('price', 8, 2);
            $table->char('brand', 100);
            $table->float('rating');
            $table->mediumInteger('numReviews');
            $table->mediumInteger('countInStock');
            $table->mediumText('description');
            $table->tinyInteger('active');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
};
