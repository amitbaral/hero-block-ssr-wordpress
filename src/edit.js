import { __ } from '@wordpress/i18n';
import { useBlockProps, MediaUpload, MediaUploadCheck, InspectorControls, RichText } from '@wordpress/block-editor';
import { Button, ResponsiveWrapper, PanelBody } from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
    const { imageUrl, imageId, heading, description, buttonText, buttonUrl } = attributes;

    const onSelectImage = (media) => {
        setAttributes({
            imageUrl: media.url,
            imageId: media.id
        });
    };

    const onRemoveImage = () => {
        setAttributes({
            imageUrl: '',
            imageId: null
        });
    };

    const onChangeHeading = (newHeading) => {
        setAttributes({ heading: newHeading });
    };

    const onChangeDescription = (newDescription) => {
        setAttributes({ description: newDescription });
    };

    const onChangeButtonText = (newButtonText) => {
        setAttributes({ buttonText: newButtonText });
    };

    const onChangeButtonUrl = (newButtonUrl) => {
        setAttributes({ buttonUrl: newButtonUrl });
    };

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Background Image', 'text-domain')} initialOpen={true}>
                    <MediaUploadCheck>
                        <MediaUpload
                            onSelect={onSelectImage}
                            allowedTypes={['image']}
                            value={imageId}
                            render={({ open }) => (
                                <Button onClick={open} isSecondary style={{ marginBottom: '20px' }}>
                                    {!imageUrl ? __('Select Background Image', 'text-domain') : __('Change Background Image', 'text-domain')}
                                </Button>
                            )}
                        />
                    </MediaUploadCheck>
                    {imageUrl && (
                        <div>
                            <ResponsiveWrapper
                                naturalWidth={600}
                                naturalHeight={400}
                            >
                                <img src={imageUrl} alt={__('Selected image', 'text-domain')} />
                            </ResponsiveWrapper>
                            <Button
                                onClick={onRemoveImage}
                                isLink
                                isDestructive
                                style={{ marginTop: '10px' }}
                            >
                                {__('Remove Background Image', 'text-domain')}
                            </Button>
                        </div>
                    )}
                </PanelBody>
            </InspectorControls>

            <div {...useBlockProps()}>
                {imageUrl ? (
                    <div className="hero-section" style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', padding: '50px 20px', color: '#fff' }}>
                        <div className="hero-section__overlay" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '20px' }}>
                            <div className="hero-section__content" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                                <RichText
                                    tagName="h1"
                                    className="hero-section__heading"
                                    value={heading}
                                    onChange={onChangeHeading}
                                    placeholder={__('Enter heading...', 'text-domain')}
                                    style={{ fontSize: '3em', marginBottom: '20px' }}
                                />
                                <RichText
                                    tagName="div"
                                    className="hero-section__description"
                                    value={description}
                                    onChange={onChangeDescription}
                                    placeholder={__('Enter description...', 'text-domain')}
                                    style={{ fontSize: '1.25em', marginBottom: '30px' }}
                                    allowedFormats={['core/bold', 'core/italic', 'core/link']} // Allow these formats
                                />
                                <RichText
                                    tagName="a"
                                    className="hero-section__button"
                                    href={buttonUrl}
                                    value={buttonText}
                                    onChange={onChangeButtonText}
                                    placeholder={__('Button Text', 'text-domain')}
                                    style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: '#fff', color: '#000', textDecoration: 'none', borderRadius: '5px' }}
                                />
                            </div>
                        </div>
                    </div>
                ) : (
                    <MediaUploadCheck>
                        <MediaUpload
                            onSelect={onSelectImage}
                            allowedTypes={['image']}
                            value={imageId}
                            render={({ open }) => (
                                <Button onClick={open} isPrimary style={{ display: 'block', margin: '20px auto' }}>
                                    {__('Select Background Image', 'text-domain')}
                                </Button>
                            )}
                        />
                    </MediaUploadCheck>
                )}
            </div>
        </>
    );
}
