<?php
declare(strict_types=1);

namespace Nexmo\Application;

use Nexmo\Client\APIResource;
use Psr\Container\ContainerInterface;

class ClientFactory
{
    /**
     * @return Client<Application>
     */
    public function __invoke(ContainerInterface $container) : Client
    {
        /** @var APIResource $api */
        $api = $container->get(APIResource::class);
        $api
            ->setBaseUri('/v2/applications')
            ->setCollectionName('applications')
        ;

        return new Client($api, new Hydrator());
    }
}
