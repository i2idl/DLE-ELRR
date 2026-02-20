/**ELRR External Services Build Shell.*/
package elrrexternalservices;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public final class ElrrExternalServices {
    /**Logger.*/
    private static final Logger LOGGER = LoggerFactory.getLogger(
        ElrrExternalServices.class);
    /**Private Instantiation.*/
    private ElrrExternalServices() {
        throw new UnsupportedOperationException();
    }
    /**ELRR External Services Logger.
     * @param args
    */
    public static void main(final String[] args) {
        LOGGER.info("Hello World");
    }
}
