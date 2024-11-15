## Proje Adı

Emre Gül - Full Stack Projesi

## Başlangıç

Projeyi çalıştırmak için aşağıdaki adımları takip edin.

## Gereksinimler

- Docker

## Kurulum

Bu depoyu indirin veya klonlayın:

```bash
git clone https://github.com/emregull/octohaus.git
```

Gerekli composer dosyalarını indirin:

```bash
cd next-backend
composer install
```

Docker container'larını başlatmak için:

```bash
cd docker
docker-compose up -d
```

Laravel projesinin ana dizinine gidin ve migration'ları çalıştırın:

```bash
cd ..
php artisan migrate
```

Laravel sunucusunu başlatın:

```bash
php artisan serve
```

.env dosyasını .env.example gibi düzenleyin yoksa oluşturun:

```bash
.env
```

(Key oluşturmanız gerekebilir laravel uyarısı ile kolayca 'generate' edip oluşturabilirsiniz.)

```bash
 http://localhost:8000
```

Next.js dosyalarını indirin:

```bash
npm install
```

Ardından Next.js'i başlatın:

```bash
npm run dev
```

Tarayıcıda http://localhost:3000 adresine gidip uygulamayı görüntüleyebilirsiniz.

yada

Tarayıcıda http://localhost:8080 adresine gidip phpmyadmin'e ulaşabilirsiniz.

Kullanıcı Adı: `octohaus`

Parola: `octohaus`
