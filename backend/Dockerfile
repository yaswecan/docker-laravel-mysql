FROM php:8.3-apache

# Set working directory
WORKDIR /var/www/html

# Install system dependencies and PHP extensions
RUN apt-get update && apt-get install -y \
    curl \
    git \
    unzip \
    zip \
    libzip-dev \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    && docker-php-ext-install pdo pdo_mysql zip \
    && a2enmod rewrite \
    && rm -rf /var/lib/apt/lists/*

# Set ServerName globally to suppress the warning
RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf

# Install Composer (use Composer image as source)
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Copy Laravel application files from the local context (which is the api folder)
COPY . /var/www/html

# Update Apache config to serve from the Laravel /public folder
RUN sed -i 's|DocumentRoot /var/www/html|DocumentRoot /var/www/html/public|g' /etc/apache2/sites-available/000-default.conf \
 && sed -i '/<Directory \/var\/www\/>/,/<\/Directory>/ s/AllowOverride None/AllowOverride All/' /etc/apache2/apache2.conf

# Ensure proper file permissions
RUN chown -R www-data:www-data /var/www/html \
 && chmod -R 755 /var/www/html

# Install PHP dependencies via Composer
RUN composer install --no-interaction --prefer-dist --optimize-autoloader

# Generate Laravel app key and setup storage
RUN php artisan key:generate \
 && php artisan storage:link \
 && chown -R www-data:www-data storage bootstrap/cache

# Expose Apache port
EXPOSE 80

# Run Apache in the foreground
CMD ["apache2-foreground"]
